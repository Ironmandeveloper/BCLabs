import { Asset } from "@/app/home/types";
import mongodbClient from "./db";

export const getAssets = async () => {
    try {
        const client = await mongodbClient;
        if (client) {
            const db = client.db("test");
            const assets = await db.collection("assets").find({}).toArray();
            const convertedAssets: Asset[] = assets.map(asset => ({
                _id: asset._id.toString(),
                iconUrl: asset.iconUrl,
                title: asset.title,
                lastTrade: asset.lastTrade,
                twentyFourChangePercent: asset.twentyFourChangePercent,
            }));
            return convertedAssets;       
        }

    } catch (error) {
        console.error(error);
        return [];       
    }
}