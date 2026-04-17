import Papa from "papaparse";

export interface ParsedCsv {
  headers: string[];
  rows: Record<string, string>[];
}

export const COLUMN_ALIASES: Record<string, string[]> = {
  platform: ["platform", "social_media", "media"],
  content_type: ["content_type", "type", "content", "tipe"],
  post_id: ["post_id", "id", "postid"],
  posted_at: ["posted_at", "date", "tanggal", "timestamp"],
  reach: ["reach", "jangkauan", "impressions"],
  likes: ["likes", "like", "suka"],
  comments: ["comments", "comment", "komentar"],
  shares: ["shares", "share", "bagikan"],
  saved: ["saved", "save", "simpan", "bookmark"],
  views: ["views", "view", "tayangan"],
  followers: ["followers", "follower", "pengikut"],
  caption: ["caption", "text", "keterangan"],
};

export const REQUIRED_COLUMNS = [
  "platform",
  "content_type",
  "post_id",
  "posted_at",
  "reach",
  "likes",
  "comments",
  "shares",
  "saved",
  "views",
  "followers",
];

export function parseCsvText(text: string): ParsedCsv {
  const result = Papa.parse<Record<string, string>>(text, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => h.trim().toLowerCase(),
  });

  if (result.errors && result.errors.length > 0) {
    // Treat delimiter / quote / field-mismatch issues as fatal so we don't silently import garbage
    const fatalCodes = new Set([
      "UndetectableDelimiter",
      "MissingQuotes",
      "InvalidQuotes",
      "TooFewFields",
      "TooManyFields",
    ]);
    const fatal = result.errors.find(
      (e) => e.type === "Delimiter" || e.type === "Quotes" || fatalCodes.has(e.code as string)
    );
    if (fatal) {
      const where = fatal.row !== undefined ? ` (baris ${fatal.row + 1})` : "";
      throw new Error(`Format CSV tidak valid${where}: ${fatal.message}`);
    }
  }

  const headers = result.meta.fields || [];
  if (headers.length === 0 || result.data.length === 0) {
    throw new Error("File CSV kosong atau tidak memiliki header");
  }

  return { headers, rows: result.data };
}

export function resolveColumn(headers: string[], key: string): string | null {
  const variations = COLUMN_ALIASES[key] || [key];
  for (const v of variations) {
    if (headers.includes(v)) return v;
  }
  return null;
}

export function validateRequiredColumns(headers: string[]): string[] {
  return REQUIRED_COLUMNS.filter((col) => resolveColumn(headers, col) === null);
}

export function getCellValue(row: Record<string, string>, headers: string[], key: string): string {
  const col = resolveColumn(headers, key);
  if (!col) return "";
  const v = row[col];
  return v == null ? "" : String(v).trim();
}

export function getCellNumber(row: Record<string, string>, headers: string[], key: string): number {
  const v = getCellValue(row, headers, key);
  if (!v) return 0;
  const n = parseInt(v, 10);
  return isNaN(n) ? 0 : n;
}
