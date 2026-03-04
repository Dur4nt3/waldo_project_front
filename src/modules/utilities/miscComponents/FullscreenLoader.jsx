import BackgroundDecor from '../../routes/root/BackgroundDecor';

export default function FullscreenLoader() {
    return (
        <>  
            <BackgroundDecor />
            <div className='fullscreen-loader'>
                <h1><span>Loading...</span></h1>
            </div>
        </>
    );
}
