import React from 'react';

type ModelPageProps = {
  params: {
    slug: string;
  };
};

export default function ModelPage({ params }: ModelPageProps) {
  const { slug } = params;
  
  return (
    <div>
      <h1>Model: {slug}</h1>
      <p>This is the model detail page.</p>
    </div>
  );
}