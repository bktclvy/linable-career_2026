type Theme = "default" | "teal" | "welfare" | "forest" | "kit";

interface PageHeaderProps {
  label: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  theme?: Theme;
}

const themeClass: Record<Theme, string> = {
  default: "default-bg",
  teal: "teal-bg",
  welfare: "welfare-bg",
  forest: "forest-bg",
  kit: "kit-bg",
};

export default function PageHeader({ label, title, sub, theme = "default" }: PageHeaderProps) {
  return (
    <div className={`page-header ${themeClass[theme]}`}>
      <div className="page-header-inner">
        <div className="page-header-label">{label}</div>
        <h1 className="page-header-title">{title}</h1>
        {sub && <p className="page-header-sub">{sub}</p>}
      </div>
    </div>
  );
}
