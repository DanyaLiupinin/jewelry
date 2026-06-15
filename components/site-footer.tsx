export function SiteFooter() {
  return (
    <footer
      style={{
        background: "#00000066",
        borderTop: "1px solid rgba(232,230,224,0.05)",
        padding: "2.5rem 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: "rgba(232,230,224,0.2)" }}
        >
          Циклотимия
        </p>
        <p
          className="text-xs"
          style={{ color: "rgba(232,230,224,0.15)", letterSpacing: "0.04em" }}
        >
          © 2025 — Авторские украшения. Все права защищены.
        </p>
        <p
          className="text-xs tracking-[0.1em]"
          style={{ color: "rgba(232,230,224,0.12)" }}
        >
          Ручная работа · Москва
        </p>
      </div>
    </footer>
  );
}
