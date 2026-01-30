interface EducationCardProps {
    universityName: string;
    degreeName: string;
    universityUrl: string;
    dates: string;
    location: string;
    gpa?: string;
}

export default function EducationCard({
    universityName,
    degreeName,
    universityUrl,
    dates,
    location,
    gpa,
}: EducationCardProps) {
    return (
        <div className="mb-6">
            <h2 className="text-base md:text-lg font-bold font-poppins text-accent">
                {universityName}
            </h2>

            <h3 className="text-lg md:text-xl font-semibold text-cream mt-1">{degreeName}</h3>

            <p className="text-sm text-cream/70 mt-2">
                {dates} • {location}
            </p>
            {gpa && <p className="text-sm font-medium text-cream/90 mt-1">GPA: {gpa}</p>}
        </div>
    );
}
