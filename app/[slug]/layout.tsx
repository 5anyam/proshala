export default function BlogPageLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-2">
        <div className="inline-block w-full text-left justify-center">
          {children}
        </div>
      </section>
    );
  }
  