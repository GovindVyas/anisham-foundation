// src/app/awards/page.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ListChecks, User, FileText, Trophy } from "lucide-react"; // Removed unused Award icon, Example icons

// Placeholder Data
const awardCategories = [
  {
    id: "cat01",
    name: "Community Leadership Award",
    description:
      "Recognizing individuals who demonstrate exceptional leadership in community development projects.",
    criteria: [
      "Minimum 3 years involvement",
      "Demonstrable positive impact",
      "Nomination by peer or community member",
    ],
  },
  {
    id: "cat02",
    name: "Educational Excellence Grant",
    description: "Supporting innovative educational programs or initiatives.",
    criteria: [
      "Clear project proposal",
      "Focus on underserved populations",
      "Measurable outcomes",
    ],
  },
  {
    id: "cat03",
    name: "Volunteer Spirit Award",
    description:
      "Honoring dedicated volunteers who consistently go above and beyond.",
    criteria: [
      "Minimum 100 hours volunteered",
      "Positive attitude and teamwork",
      "Nomination by staff or fellow volunteer",
    ],
  },
];

const pastWinners = [
  {
    id: "win01",
    year: 2024,
    awardName: "Community Leadership Award",
    winnerName: "Aisha Khan",
    project: "Neighborhood Revitalization Project",
  },
  {
    id: "win02",
    year: 2024,
    awardName: "Educational Excellence Grant",
    winnerName: "Project Bright Start",
    project: "Early Childhood Literacy Program",
  },
  {
    id: "win03",
    year: 2023,
    awardName: "Volunteer Spirit Award",
    winnerName: "Ravi Kumar",
    project: "Mentorship Program",
  },
  {
    id: "win04",
    year: 2023,
    awardName: "Community Leadership Award",
    winnerName: "Maria Garcia",
    project: "Local Food Bank Initiative",
  },
];

// Placeholder Components
const AwardCategoryCard: React.FC<{
  category: (typeof awardCategories)[0];
}> = ({ category }) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle className="text-xl flex items-center">
        <Trophy className="mr-2 h-5 w-5 text-primary" /> {category.name}
      </CardTitle>
      <CardDescription>{category.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <h4 className="font-semibold mb-2 text-sm">Eligibility Criteria:</h4>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
        {category.criteria.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const ApplicationProcess = () => (
  <section id="application-process" className="my-12 bg-gray-50 p-6 rounded-lg">
    <h2 className="text-2xl font-semibold mb-4 flex items-center">
      <FileText className="mr-2 h-6 w-6 text-primary" /> Application Process
    </h2>
    <p className="text-gray-700 mb-4">
      Interested in applying for one of our awards or grants? Please follow the
      steps below. The application window is typically open from April 1st to
      June 30th each year.
    </p>
    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
      <li>
        Carefully review the criteria for the specific award/grant category.
      </li>
      <li>Download the official application form (link below).</li>
      <li>
        Complete the form thoroughly, providing all required documentation.
      </li>
      <li>
        Submit your application package via email or mail by the specified
        deadline.
      </li>
    </ol>
    <div className="flex space-x-4">
      <Button variant="outline">Download Application Form (PDF)</Button>
      {/* <Button>Submit Online (If Applicable)</Button> */}
    </div>
  </section>
);

const PastWinnersSection = () => (
  <section id="past-winners">
    <h2 className="text-2xl font-semibold mb-6 flex items-center">
      <User className="mr-2 h-6 w-6 text-primary" /> Past Award Recipients
    </h2>
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Year
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Award
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Recipient
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Project/Initiative
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pastWinners.map((winner) => (
                <tr key={winner.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {winner.year}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {winner.awardName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {winner.winnerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {winner.project}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </section>
);

const AwardsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        Foundation Awards & Grants
      </h1>

      {/* Award Categories & Criteria Section */}
      <section id="award-categories" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <ListChecks className="mr-2 h-6 w-6 text-primary" /> Award Categories
          & Criteria
        </h2>
        {awardCategories.map((cat) => (
          <AwardCategoryCard key={cat.id} category={cat} />
        ))}
      </section>

      <ApplicationProcess />

      <PastWinnersSection />
    </div>
  );
};

export default AwardsPage;
