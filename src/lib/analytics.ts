import { format } from "date-fns";

export interface PostLike {
  waktu_diposting: string;
  engagement_rate_persen?: number | null;
  jumlah_reach?: number | null;
  jumlah_likes?: number | null;
  jumlah_komentar?: number | null;
  jumlah_shares?: number | null;
  jumlah_saved?: number | null;
  jumlah_followers?: number | null;
  total_engagement?: number | null;
  platform?: { nama_platform?: string | null } | null;
  jenis_konten?: { nama_jenis_konten?: string | null } | null;
  [key: string]: unknown;
}

export const DAY_NAMES = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

export function median(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

export function average(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((s, v) => s + v, 0) / values.length;
}

export function computeKpi(posts: PostLike[]) {
  if (posts.length === 0) {
    return { totalPosts: 0, avgER: 0, medianReach: 0, followersNow: 0, saveRate: 0, shareRate: 0 };
  }
  const totalPosts = posts.length;
  const avgER = average(posts.map((p) => p.engagement_rate_persen || 0));
  const medianReach = median(posts.map((p) => p.jumlah_reach || 0));
  const latestPost = posts.reduce((latest, p) =>
    new Date(p.waktu_diposting) > new Date(latest.waktu_diposting) ? p : latest
  );
  const followersNow = latestPost.jumlah_followers || 0;
  const totalReach = posts.reduce((sum, p) => sum + Math.max(p.jumlah_reach || 0, 1), 0);
  const totalSaves = posts.reduce((sum, p) => sum + (p.jumlah_saved || 0), 0);
  const totalShares = posts.reduce((sum, p) => sum + (p.jumlah_shares || 0), 0);
  return {
    totalPosts,
    avgER: Number(avgER.toFixed(2)),
    medianReach,
    followersNow,
    saveRate: Number(((totalSaves / totalReach) * 100).toFixed(2)),
    shareRate: Number(((totalShares / totalReach) * 100).toFixed(2)),
  };
}

export function weeklyEngagementTrend(posts: PostLike[]) {
  const map = new Map<string, { totalER: number; count: number }>();
  posts.forEach((post) => {
    const date = new Date(post.waktu_diposting);
    const weekStart = new Date(date);
    weekStart.setDate(date.getDate() - date.getDay());
    const key = format(weekStart, "yyyy-MM-dd");
    const cur = map.get(key) || { totalER: 0, count: 0 };
    map.set(key, {
      totalER: cur.totalER + (post.engagement_rate_persen || 0),
      count: cur.count + 1,
    });
  });
  return Array.from(map.entries())
    .map(([week, d]) => ({
      weekKey: week,
      week: format(new Date(week), "dd MMM"),
      avgER: Number((d.totalER / d.count).toFixed(2)),
      posts: d.count,
    }))
    .sort((a, b) => a.weekKey.localeCompare(b.weekKey));
}

export function distributionBy(posts: PostLike[], picker: (p: PostLike) => string) {
  const map = new Map<string, number>();
  posts.forEach((p) => {
    const name = picker(p) || "Tidak Diketahui";
    map.set(name, (map.get(name) || 0) + 1);
  });
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count, percentage: (count / posts.length) * 100 }))
    .sort((a, b) => b.count - a.count);
}

export const platformDistribution = (posts: PostLike[]) =>
  distributionBy(posts, (p) => p.platform?.nama_platform || "Tidak Diketahui");

export const contentTypeDistribution = (posts: PostLike[]) =>
  distributionBy(posts, (p) => p.jenis_konten?.nama_jenis_konten || "Tidak Diketahui");

export function bestPostingTimes(posts: PostLike[], minSamples = 1) {
  const map = new Map<string, { values: number[] }>();
  posts.forEach((post) => {
    const date = new Date(post.waktu_diposting);
    const key = `${date.getDay()}-${date.getHours()}`;
    const cur = map.get(key) || { values: [] };
    cur.values.push(post.engagement_rate_persen || 0);
    map.set(key, cur);
  });
  return Array.from(map.entries())
    .filter(([, d]) => d.values.length >= minSamples)
    .map(([key, d]) => {
      const [day, hour] = key.split("-").map(Number);
      return {
        day: DAY_NAMES[day],
        hour: `${hour.toString().padStart(2, "0")}:00`,
        medianER: median(d.values),
        count: d.values.length,
      };
    })
    .sort((a, b) => b.medianER - a.medianER);
}
