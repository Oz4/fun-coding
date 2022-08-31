import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Track from './Track';
function Page() {

    return (
        <div className='w-full bg-black h-full min-h-screen text-white font-medium flex justify-evenly overflow-hidden absolute top-0 left-0'>

            <Track
                direction='up'
                images={[
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xd23f6af3e40b3259a214ef969c741d58923fa4a996a5d18acbd376dd35930974?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xa6e6550bc3c9ce2d97be10f558ab67494efee9be3137171762ade4941dd298d2?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xcaa3da786657a743aaf86f9d85bf3e6f1718ac2b6f83212406e2e8b77d7d127a?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xd5f6f082818f77503465a75e473316d994bbcc8d1160a147b36c9e4100ee7b3a?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xf5b8271d1f131f230dabf20d442f8eeee898c1e968caf054774cc2d29199cfb5?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xe52cb0547c3aa4209619be6a6ad48abe616e687bd961f6eca1487f83d1da468f?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xd23f6af3e40b3259a214ef969c741d58923fa4a996a5d18acbd376dd35930974?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xa6e6550bc3c9ce2d97be10f558ab67494efee9be3137171762ade4941dd298d2?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xcaa3da786657a743aaf86f9d85bf3e6f1718ac2b6f83212406e2e8b77d7d127a?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xd5f6f082818f77503465a75e473316d994bbcc8d1160a147b36c9e4100ee7b3a?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xf5b8271d1f131f230dabf20d442f8eeee898c1e968caf054774cc2d29199cfb5?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xe52cb0547c3aa4209619be6a6ad48abe616e687bd961f6eca1487f83d1da468f?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                ]}
                left={0}
            />

            <Track
                direction='down'
                images={[
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xa1f33eb80a4f18c41371b4ae6850dd4bf7cd2a8ecca4b046665d9f720c15856d?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xdcaaf6af6ffbe03ae319d6f7a8b349cdaec46db7592fd35e65f4e910ff90b3da?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xb8a24e502236deee1582154827966939c86346b558ff49284132185e2a386658?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xac4f2b284fad621779bb55fe45b62cc5574b6ef365540f2240f8530ac0fe2942?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xafcf4c7790bbc4833d993ba2aa764e4606b51853318078e3c7ffea4ba4d16d15?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0x68614b328edcecbb3553bbbebd32e760792f6fa7635a0896c52e0c4f4f459467?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xa1f33eb80a4f18c41371b4ae6850dd4bf7cd2a8ecca4b046665d9f720c15856d?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xdcaaf6af6ffbe03ae319d6f7a8b349cdaec46db7592fd35e65f4e910ff90b3da?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xb8a24e502236deee1582154827966939c86346b558ff49284132185e2a386658?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xac4f2b284fad621779bb55fe45b62cc5574b6ef365540f2240f8530ac0fe2942?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xafcf4c7790bbc4833d993ba2aa764e4606b51853318078e3c7ffea4ba4d16d15?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0x68614b328edcecbb3553bbbebd32e760792f6fa7635a0896c52e0c4f4f459467?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                ]}
                left={"25.25%"}
                right={undefined}
            />

            <Track
                direction='up'
                images={[
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xd23f6af3e40b3259a214ef969c741d58923fa4a996a5d18acbd376dd35930974?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xa6e6550bc3c9ce2d97be10f558ab67494efee9be3137171762ade4941dd298d2?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xcaa3da786657a743aaf86f9d85bf3e6f1718ac2b6f83212406e2e8b77d7d127a?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xd5f6f082818f77503465a75e473316d994bbcc8d1160a147b36c9e4100ee7b3a?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xf5b8271d1f131f230dabf20d442f8eeee898c1e968caf054774cc2d29199cfb5?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xe52cb0547c3aa4209619be6a6ad48abe616e687bd961f6eca1487f83d1da468f?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xd23f6af3e40b3259a214ef969c741d58923fa4a996a5d18acbd376dd35930974?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xa6e6550bc3c9ce2d97be10f558ab67494efee9be3137171762ade4941dd298d2?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xcaa3da786657a743aaf86f9d85bf3e6f1718ac2b6f83212406e2e8b77d7d127a?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xd5f6f082818f77503465a75e473316d994bbcc8d1160a147b36c9e4100ee7b3a?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xf5b8271d1f131f230dabf20d442f8eeee898c1e968caf054774cc2d29199cfb5?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xe52cb0547c3aa4209619be6a6ad48abe616e687bd961f6eca1487f83d1da468f?resource_type=image&f=auto&c=divmit&w=1600&q=auto",
                ]}
                left={undefined}
                right="25.25%"
            />

            <Track
                direction='down'
                images={[
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xa1f33eb80a4f18c41371b4ae6850dd4bf7cd2a8ecca4b046665d9f720c15856d?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xdcaaf6af6ffbe03ae319d6f7a8b349cdaec46db7592fd35e65f4e910ff90b3da?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xb8a24e502236deee1582154827966939c86346b558ff49284132185e2a386658?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xac4f2b284fad621779bb55fe45b62cc5574b6ef365540f2240f8530ac0fe2942?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xafcf4c7790bbc4833d993ba2aa764e4606b51853318078e3c7ffea4ba4d16d15?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0x68614b328edcecbb3553bbbebd32e760792f6fa7635a0896c52e0c4f4f459467?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xa1f33eb80a4f18c41371b4ae6850dd4bf7cd2a8ecca4b046665d9f720c15856d?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xdcaaf6af6ffbe03ae319d6f7a8b349cdaec46db7592fd35e65f4e910ff90b3da?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xb8a24e502236deee1582154827966939c86346b558ff49284132185e2a386658?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xac4f2b284fad621779bb55fe45b62cc5574b6ef365540f2240f8530ac0fe2942?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0xafcf4c7790bbc4833d993ba2aa764e4606b51853318078e3c7ffea4ba4d16d15?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                    "https://looksrare.mo.cloudinary.net/0x31d45de84fdE2fB36575085e05754a4932DD5170/0x68614b328edcecbb3553bbbebd32e760792f6fa7635a0896c52e0c4f4f459467?resource_type=image&f=auto&c=limit&w=1600&q=auto",
                ]}
                left={undefined}
                right={0}
            />

        </div>
    )
}

export default Page