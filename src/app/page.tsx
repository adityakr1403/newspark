import TopCarousel from "@/components/latestPostsTopCrousel/topCarousel";
import {blogger_v3} from "googleapis";
import InternationalSection from "@/components/homePageSections/internationalSection/internationalSection";
import SportsSection from "@/components/homePageSections/sportsSection/sportsSection";
import EntertainmentSection from "@/components/homePageSections/entertainmentSection/entertainmentSection";
import TechnologySection from "@/components/homePageSections/technologySection/technologySection";
import FeaturedSection from "@/components/homePageSections/featuredSection/featuredSection";
import HeroSection from "@/components/homePageSections/heroSection/heroSection";

export const revalidate = 0;

export default async function Home() {
    const res = await fetch(`${process.env.NEXTJS_API_URL}/post`);
    if (!res.ok) {
        console.error(`Failed to fetch posts: ${res.statusText} `);
    }
    const postsForEachCategory: {
        topCarousel: blogger_v3.Schema$PostList,
        heroSection: blogger_v3.Schema$PostList,
        latestPost: blogger_v3.Schema$PostList,
        popularPost: blogger_v3.Schema$PostList,
        trendingPost: blogger_v3.Schema$PostList,
        featured: blogger_v3.Schema$PostList,
        technology: blogger_v3.Schema$PostList,
        mostView: blogger_v3.Schema$PostList,
        entertainment: blogger_v3.Schema$PostList,
        sliderPost: blogger_v3.Schema$PostList,
        sports: blogger_v3.Schema$PostList,
        international: blogger_v3.Schema$PostList,
    } = await res.json();


    return (
        <main className="flex flex-col items-center justify-center w-full lg:max-w-[1164px]">
            <TopCarousel postItemList={postsForEachCategory.topCarousel}/>
            {/*hero section*/}
            <HeroSection postItemList={postsForEachCategory.heroSection}/>
            {/*/!*featured news*!/*/}
            <FeaturedSection postItemList={postsForEachCategory.international}/>
            {/*/!*technology*!/*/}
            <TechnologySection postItemList={postsForEachCategory.technology}/>
            {/*/!*entertainment*!/*/}
            <EntertainmentSection postItemList={postsForEachCategory.entertainment}/>
            {/*Sports*/}
            <SportsSection postItemList={postsForEachCategory.sports}/>
            {/*/!*international news*!/*/}
            <InternationalSection postItemList={postsForEachCategory.international}/>
        </main>
    );
}
