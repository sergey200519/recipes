export default function Footer() {
    return (
        <footer className="bg-teal-600 text-white py-4 mt-10">
            <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                <span> {new Date().getFullYear()}</span>
                <a 
                    href="#!"
                    className="text-gray-200 hover:text-white transition-colors duration-200"
                >
                    Reportitory
                </a>
            </div>
        </footer>
    )
}