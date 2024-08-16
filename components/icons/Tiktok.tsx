import Link from "next/link"
import { Button } from "@/components/ui/button"

// Social network configuration file import
import settings from '@/data/settings'

export const Tiktok = () => {
    return <Button variant="ghost" className="hover:bg-transparent w-fit h-fit p-0" asChild>
        <Link href={settings.social.tiktok}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
            </svg>
        </Link>
    </Button>
}