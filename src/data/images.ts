// Image mapping utility: uses extracted local assets with remote fallback
export const PATHS: Record<string, string> = {
  vision: 'about%2Fvision.jpg',
  whoWeAre: 'about%2Fwho-we-are.jpg',
  welcome: 'about%2Fwelcome.jpg',
  mission: 'about%2Fmission.jpg',
  charism: 'about%2Fcharism.jpg',
  founder: 'about%2Ffounder.jpg',
  aspirancy: 'formation%2Faspirancy.jpg',
  preCandidacy: 'formation%2Fpre-candidacy.jpg',
  candidacy: 'formation%2Fcandidacy.jpg',
  novitiate: 'formation%2Fnovitiate.jpg',
  firstProfession: 'formation%2Ffirst-profession.jpg',
  finalProfession: 'formation%2Ffinal-profession.jpg',
  ongoing: 'formation%2Fongoing-formation.jpg',
};

// Local extracted assets mapping
export const LOCAL_IMAGES: Record<string, string> = {
  logo: '/images/3acc61dd-6b0d-4727-b46e-05d4e1effe3b.png',
  novitiate: '/images/d47eb856-61dc-44eb-a2f9-adcc732fb241.jpg',
  sistersYoung: '/images/c5bc37b9-c6a0-4560-989c-637ce7e31431.jpg',
  firstProfession: '/images/6cd5ac55-4d14-4605-abc5-f4313a7d693b.jpg',
  whoWeAre: '/images/10a3d6f4-cef0-4471-82af-4172b43e3cb0.jpg',
  communityOutreach: '/images/79601f99-a0c0-40dc-9e03-809cb3ca3c69.jpg',
  vision: '/images/444316d0-a8d6-4312-ba23-d42985f94da3.jpg',
  welcome: '/images/2a4ee4a9-f07d-4a21-8000-0b58838f18a8.jpg',
  mission: '/images/f7debe8b-2b93-4733-82e8-a9f12ffb5764.jpg',
  charism: '/images/2d3eed5f-a21c-4e7b-ac9b-3411b2d1cfc6.jpg',
  founder: '/images/99d665b1-89bd-4d60-9722-1f894a82bb40.jpg',
  aspirancy: '/images/70d53ea8-7fb5-44a7-93d9-c2bd586ffdb9.jpg',
  preCandidacy: '/images/38df1a0e-ebd9-4894-b1b5-86ab5ef68ef4.jpg',
  candidacy: '/images/c0e8002d-4831-4d09-9a7a-6fe4133d6fee.jpg',
  finalProfession: '/images/95415fc2-c08e-444d-a11d-99038d2695de.jpg',
  ongoing: '/images/2696b062-7920-4548-a7b9-7d135af4728e.jpg',
};

export function getImageUrl(key: string, width: number = 1920): string {
  if (LOCAL_IMAGES[key]) {
    return LOCAL_IMAGES[key];
  }
  const remotePath = PATHS[key];
  if (remotePath) {
    return `https://mshr-next-kxk3.vercel.app/_next/image?url=%2Fimages%2F${remotePath}&w=${width}&q=75`;
  }
  return '/images/d47eb856-61dc-44eb-a2f9-adcc732fb241.jpg';
}
