export async function GET(request) {
  const profileData = {
    name: 'Swetha Varma',
    title: 'Consultant Clinical Psychologist',
    experience: '10+ Years of experience',
    rate: '1,200/Session',
    location: 'Block A2, Delhi',
    credentials: [
      { label: 'Ph.D. in Clinical Psychology', value: 'Harvard University' },
      { label: 'M.A. in Counseling', value: 'University of California, Berkeley' },
      { label: 'Licensed Professional Counselor (LPC)', value: 'State of DEF' },
      { label: 'Certified Cognitive Behavioral Therapist (CBT)', value: '' },
      { label: 'Member, American Psychological Association (APA)', value: '' },
      { label: '10+ years of experience in individual and group therapy', value: '' },
    ],
    availableOn: ['In-person', 'Video/Voice call'],
    therapyServices: [
      'Stress Management',
      'Relationship Skills',
      'Anxiety Reduction',
      'Depression Relief',
      'Behavioral',
      'Trauma Healing',
    ],
    languages: ['English', 'Hindi'],
    testimonials: [
      {
        text: 'The guidance I received helped me manage my stress and live a more balanced life.',
        author: 'Anonymous',
      },
      {
        text: 'Therapy helped me build self-esteem and confidence that I never thought possible.',
        author: 'Anonymous',
      },
    ],
  };

  return new Response(JSON.stringify(profileData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}