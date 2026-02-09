import Image from "next/image"
import HeroImg from '@/assets/banner.jpg'
import BookRoomFilter from "../book-room-filter/page"

const HeroBanner = () => {
    return (
        <div className="w-full h-screen overflow-hidden relative before:content before:absolute before:top-0 before:left-0 before:bg-background/50 before:z-10 before:w-full before:h-full">
            <Image src={HeroImg} alt="Hero Banner" className="w-full h-full object-cover" />

            <div className="absolute w-full left-1/2 -translate-x-1/2 bottom-0 z-10">
                <div className=" flex items-center flex-col gap-3">
                    <p className="custom-font italic text-primary font-regular text-xl text-center">Excusine Hotel & Resort</p>
                    <h2 className="custom-font uppercase text-6xl font-baskervville font-regular text-center">luxury meets serenity at our</h2>
                    <h3 className="custom-font italic font-regular uppercase text-5xl text-primary mt-2 text-center relative before:content before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-primary">elite hotel</h3>
                </div>

                {/* booking search */}
                <BookRoomFilter />
            </div>
        </div>
    )
}

export default HeroBanner