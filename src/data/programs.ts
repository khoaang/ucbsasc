export type Program = {
  title: string;
  description: string;
  goals: string;
};

export const programs: Program[] = [
  {
    title: 'Southeast Asian Mentorship Program (SEAM)',
    description:
      'SEAM pairs Berkeley students with Southeast Asian high schoolers for a semester of college applications, academics, and practical questions about getting to campus. High school students from across California have come through the program, including visits to Berkeley.',
    goals: 'Support high school students through the college process and into their first years on campus.',
  },
  {
    title: 'Southeast Asian Orientation (SEASO)',
    description:
      'SEASO helps new and returning Southeast Asian students find SASC and each other early in the semester through hangouts, alumni stories, and introductions to campus life.',
    goals: 'Help students start the year with people they can rely on.',
  },
  {
    title: 'Southeast Asian Cultural Festival (SEACF)',
    description:
      'SEACF brings together Southeast Asian organizations for dance, music, food, and related arts. Alongside Night Market, it is one of the main ways SASC gives SEA orgs a platform and shares those cultures with the wider campus.',
    goals: 'Give SEA organizations a stage and share our cultures with the Berkeley community.',
  },
  {
    title: 'SEAgraduation',
    description:
      'SEAgrad is our annual ceremony for graduating Southeast Asian seniors, with family, performances, cultural sashes, and time to recognize each student’s path through Berkeley.',
    goals: 'Celebrate graduating seniors with their families and community.',
  },
];
