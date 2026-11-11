export type Business = { id:number; name:string; city:string; rating:number; reviewCount:number };
export const businesses: Business[] = [
 {id:1,name:'Desert Bloom Cafe',city:'Tempe',rating:4.8,reviewCount:210},
 {id:2,name:'Copper Trail Coffee',city:'Phoenix',rating:4.6,reviewCount:380},
 {id:3,name:'Sonoran Bakehouse',city:'Tempe',rating:4.9,reviewCount:95},
 {id:4,name:'Cactus Corner Bistro',city:'Mesa',rating:4.3,reviewCount:420}
];
// Bayesian average prevents a business with one five-star review from dominating.
export function score(b:Business, priorMean=4.0, priorWeight=50):number {
 return Number(((b.reviewCount*b.rating+priorWeight*priorMean)/(b.reviewCount+priorWeight)).toFixed(3));
}
export function rankings(city?:string) {
 return businesses.filter(b=>!city || b.city.toLowerCase()===city.toLowerCase()).map(b=>({...b,score:score(b)})).sort((a,b)=>b.score-a.score);
}
