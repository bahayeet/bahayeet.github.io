import EducationCard from "./EducationCard";


export default function Education() {
    return (
        <section className="container p-4 h-screen flex items-center justify-center">
            <div className="flex flex-col space-y-8 mx-15 md:mx-0">
                <h1 className="text-4xl md:text-8xl font-bold text-center md:text-start md:-ml-3">school.</h1>



                <div className="flex flex-col md:flex-row justify-end gap-y-15 md:gap-y-0">
                    <div className="text-center md:text-center mx-5">
                        <EducationCard
                            degreeName="M.S. in Mechanical Engineering"
                            universityName="Penn State University"
                            universityUrl="https://www.psu.edu/"
                            dates="August 2022 - August 2025"
                            location="State College, Pennsylvania"
                            gpa="4.00/4.00"
                        />
                    </div>

                    <div className="text-center md:text-center mx-5">
                        <EducationCard
                            degreeName="B.S. in Mechanical Engineering"
                            universityName="King Fahd University of Petroleum and Minerals"
                            universityUrl="https://www.kfupm.edu.sa/"
                            dates="September 2017 - May 2022"
                            location="Dhahran, KSA"
                            gpa="3.79/4.00"
                        />
                    </div>
                </div>


            </div>
        </section>
    );
}