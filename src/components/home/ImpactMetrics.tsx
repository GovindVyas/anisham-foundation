'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import useCounterAnimation from '@/hooks/useCounterAnimation';

const metrics = [
  { value: 2500, label: 'People Trained', suffix: '+' },
  { value: 50, label: 'Communities Reached', suffix: '+' },
  { value: 15, label: 'Years of Service' },
  { value: 95, label: 'Success Rate', suffix: '%' }
];

const ImpactMetrics = () => {
  const trainedCount = useCounterAnimation(metrics[0].value);
  const communitiesCount = useCounterAnimation(metrics[1].value);
  const yearsCount = useCounterAnimation(metrics[2].value);
  const successCount = useCounterAnimation(metrics[3].value);

  const counts = [trainedCount, communitiesCount, yearsCount, successCount];

  return (
    // Use default background to alternate with adjacent sections
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Apply heading font */}
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            // Card uses default bg-card/text-card-foreground which adapts
            <Card key={metric.label} className="text-center p-6"> {/* Added padding */}
              <CardHeader className="p-0 mb-2"> {/* Adjusted padding/margin */}
                {/* Apply heading font and accent color */}
                <CardTitle className="font-heading text-4xl font-bold text-accent">
                  {counts[index]}
                  {metric.suffix}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0"> {/* Adjusted padding */}
                <p className="text-base text-muted-foreground"> {/* Adjusted size */}
                  {metric.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
