import { useRouter } from 'next/router'
import { BsArrowLeftShort } from 'react-icons/bs'

const style = {
    wrapper: `border-[#38444d] border-b`,
    header: `py-1 px-3 mt-2 flex items-center`,
    primary: `bg-transparent outline-none font-bold`,
    secondary: `text-[#8899a6] text-xs`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
    coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
    profileImage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `px-3`,
    nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-white`,
}

const ProfileHeader = () => {
    const router = useRouter()
    const currentAccount  = '23hbdbf348y593xmdf'
    const isProfileImageNft = false
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div
                onClick={() => router.push('/')}
                className={style.backButton}>
                    <BsArrowLeftShort />
                </div>
                <div className={style.details}>
                    <div className={style.primary}>Anshika</div>
                    <div className={style.secondary}>4 Tweets</div>
                </div>
            </div>
            <div>
                <img
                src="http://wallpapers.net/anime-school-girl-hd-wallpaper/download/1500x500.jpeg"
                alt="cover"
                className={style.coverPhoto}
                />
            </div>
            <div className={style.profileImageContainer}>
                <div className={isProfileImageNft ? 'hex' : style.profileImageContainer}>
                    <img src="https://i.pinimg.com/originals/c7/b3/fc/c7b3fc77374f3abcf927bcadfe4d1224.jpg" 
                    alt="Anshika" 
                    className={isProfileImageNft ? style.profileImageNft : style.profileImage}/>
                </div>
            </div>
            <div className={style.details}>
                <div>
                    <div className={style.primary}>Anshika</div>
                    <div className={style.secondary}>
                        {
                            currentAccount && (
                                <>
                                    @{currentAccount.slice(0, 8)}...{currentAccount.slice(37)}
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader