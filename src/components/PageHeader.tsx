interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className="py-6 px-4 border-b border-secondary/20 backdrop-blur-sm mb-8">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-300% animate-gradient bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-center text-gray-300 mt-2 animate-fade-in">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default PageHeader;