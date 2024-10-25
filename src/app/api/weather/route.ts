import {NextRequest, NextResponse} from "next/server";
import {NextApiRequest} from "next";
import {getWeatherInfo} from "@/utils/weatherApiUtils";

type WeatherInfo = {
    temp: number;
    city: string;
    icon: string;
}

export async function POST(req: NextRequest) {
    const {latitude, longitude} = await req.json();

    const weatherInfo = await getWeatherInfo({latitude, longitude});

    return Response.json(weatherInfo);
}