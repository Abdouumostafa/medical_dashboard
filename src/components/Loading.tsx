import loading from '../assets/loading.svg'

const Loading = () => {
    return (
        <div className='relative w-fit mx-auto loadingParent'>
            <img className='loadingAnimation w-[110px] h-[110px] relative z-[200000] ' src={loading} />
            <div className='border-[6px] absolute inset-0 z-[10] border-[#cfcccc] w-[110px] h-[110px] rounded-full'></div>
        </div>)
}

export default Loading