
import React from 'react';

const TechStack: React.FC = () => {
  const techLogos = [
    { name: 'Snowflake', logo: "https://www.vectorlogo.zone/logos/snowflake/snowflake-ar21.svg" },
    { name: 'Databricks', logo: "https://www.vectorlogo.zone/logos/databricks/databricks-ar21.svg" },
    { name: 'Google BigQuery', logo: "https://www.vectorlogo.zone/logos/google_bigquery/google_bigquery-ar21.svg" },
    { name: 'Amazon S3', logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg" },
    { name: 'Amazon Redshift', logo: "https://d1.awsstatic.com/logos/partners/amazon-redshift-logo.5c4babf044c976b748dab7725ece9366f8c3d528.png" },
    { name: 'Oracle', logo: "https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg" },
    { name: 'Salesforce', logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg" },
    { name: 'CSV', logo: "https://cdn-icons-png.flaticon.com/512/6133/6133884.png" },
    { name: 'Excel', logo: "https://www.vectorlogo.zone/logos/microsoft_excel/microsoft_excel-ar21.svg" },
    { name: 'Google Sheets', logo: "https://www.vectorlogo.zone/logos/google_sheets/google_sheets-ar21.svg" },
    { name: 'PostgreSQL', logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg" },
    { name: 'MySQL', logo: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" },
    { name: 'SQL Server', logo: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
    { name: 'SingleStore', logo: "https://www.vectorlogo.zone/logos/singlestore/singlestore-ar21.svg" },
    { name: 'Clickhouse', logo: "https://clickhouse.com/images/logos/clickhouse-logo.svg" },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-white to-superlens-mutedBlue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-superlens-textBlue">
            Seamlessly integrate with your tech stack
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            SuperLens integrates with the tools you already use, enhancing your capabilities without disrupting your workflow.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
            {techLogos.map((tech, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center"
                aria-label={tech.name}
                title={tech.name}
              >
                <div className="h-12 w-auto flex items-center justify-center mb-2">
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`}
                    className="max-h-12 max-w-[100px] object-contain"
                  />
                </div>
                <span className="text-xs text-gray-600 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
