import Post from '../Post'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
       displayName: 'Anshika' ,
       userName: '23hbdbf348y593xmdf',
       avatar: 'https://i.pinimg.com/originals/c7/b3/fc/c7b3fc77374f3abcf927bcadfe4d1224.jpg',
       text: 'gm',
       isProfileImageNft: false,
       timestamp: '2022-12-21T09:00:00.00Z'
    },
    {
        displayName: 'Anshika' ,
        userName: '23hbdbf348y593xmdf',
        avatar: 'https://i.pinimg.com/originals/c7/b3/fc/c7b3fc77374f3abcf927bcadfe4d1224.jpg',
        text: 'Hello this is Post 2',
        isProfileImageNft: false,
        timestamp: '2022-09-21T03:00:00.00Z'
     },
     {
        displayName: 'Anshika' ,
        userName: '23hbdbf348y593xmdf',
        avatar: 'https://i.pinimg.com/originals/c7/b3/fc/c7b3fc77374f3abcf927bcadfe4d1224.jpg',
        text: 'Post 3',
        isProfileImageNft: false,
        timestamp: '2021-12-21T07:00:00.00Z'
     },
     {
        displayName: 'Anshika' ,
        userName: '23hbdbf348y593xmdf',
        avatar: 'https://i.pinimg.com/originals/c7/b3/fc/c7b3fc77374f3abcf927bcadfe4d1224.jpg',
        text: 'Post 4',
        isProfileImageNft: false,
        timestamp: '2022-12-21T23:00:00.00Z'
     },
]

const ProfileTweets = () => {
    return(
        <div className={style.wrapper}>
            {tweets?.map((tweet, index) => (
                <Post 
                key={index}
                displayName="Anshika Negi"
                userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(-4)}`}
                text={tweet.text}
                avatar={tweet.avatar}
                isProfileImageNft={tweet.isProfileImageNft}
                timestamp={tweet.timestamp}
                />
            ))}
        </div>
    )
}

export default ProfileTweets