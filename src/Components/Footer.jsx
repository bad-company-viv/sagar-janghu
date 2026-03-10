export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-end">
                    <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-sm">
                        <a 
                            href="https://fabulousmedia.in" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-105"
                        >
                            <img 
                                src="/sitecredits/fabulous.png" 
                                alt="Fabulous Media" 
                                className="h-8 w-auto"
                            />
                        </a>
                        <div className="w-px h-8 bg-gray-300 mx-4"></div>
                        <a 
                            href="https://gocommercially.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-105"
                        >
                            <img 
                                src="/sitecredits/gocomercially.svg" 
                                alt="Go Commercially" 
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}