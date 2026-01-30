interface WorkCardProps {
  logo: string;
  jobTitle: string;
  companyName: string;
  companyUrl: string;
  dates: string;
  location: string;
  description: string;
}

export default function WorkCard({
  jobTitle,
  companyName,
  companyUrl,
  dates,
  location,
  description,
}: WorkCardProps) {
  return (
    <div className="flex flex-row w-full max-w-5xl p-4 mx-auto mb-6">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-2xl md:text-3xl text-start font-bold font-poppins text-cream">{jobTitle}</h2>
        <p className="text-base md:text-lg text-accent mt-1">
          {companyName}
        </p>

        <p className="text-start text-sm text-cream/70 mt-2">
          {dates} • {location}
        </p>

        <p className="text-start text-sm md:text-base text-cream/90 mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
