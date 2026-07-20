import Link from "next/link";
import { Fragment } from "react";

/**
 * Renders content strings with lightweight markers:
 *   **text**      → <strong>
 *   [label|/path] → internal <Link>
 */
export function RichText({ text }: { text: string }) {
  const TOKEN = /\*\*(.+?)\*\*|\[([^\]|]+)\|([^\]]+)\]/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = TOKEN.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1]) {
      nodes.push(
        <strong key={m.index} className="font-semibold text-slate-900">
          {m[1]}
        </strong>
      );
    } else {
      nodes.push(
        <Link
          key={m.index}
          href={m[3]}
          className="text-brand font-semibold hover:underline"
        >
          {m[2]}
        </Link>
      );
    }
    last = TOKEN.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));

  return <Fragment>{nodes}</Fragment>;
}
