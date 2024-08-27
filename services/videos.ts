// React cache
import { cache } from "react";

// Types
import { VideoItem } from "@/types";

// Fake data
import {business_questions} from '@/data/videos'


// Get all video in slider content from fake API service
export const getBusinessVideos = cache(async ():Promise<VideoItem[]> =>  business_questions);

