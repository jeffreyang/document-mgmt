import Image from 'next/image'
import {Button} from '@/components/ui/button'
import SidebarDemo from '@/components/sidebar'
import SidebarDemo2 from '@/components/sidebar2'

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { AspectRatioDemo } from '@/components/aspect-ratio-demo'

export default function Home() {
  return (
    <main>
      <div>
      {/* <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio> */}
    <SidebarDemo2></SidebarDemo2>
    <SidebarDemo></SidebarDemo>


      </div>
    </main>
  )
}
