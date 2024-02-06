import Image from "next/image"

export default function ScrollImageSequence(){
    const alt = "image-ex";

    return <Image
        width={100}
        height={100}
        src={'https://deriksehnstorage.s3.amazonaws.com/seq/00004.jpg'} alt={alt}/>
}