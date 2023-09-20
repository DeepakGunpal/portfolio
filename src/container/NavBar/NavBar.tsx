import Link from 'next/link';

const Navar = () => {
    return (
        <nav className="fixed top-5 left-1/4 w-1/2 bg-white bg-opacity-50 backdrop-blur-md p-4 rounded-full">
            <div className="container mx-auto">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <Link href="#" className="text-gray-800 hover:text-blue-500" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#skills" className="text-gray-800 hover:text-blue-500">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects" className="text-gray-800 hover:text-blue-500">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#experience" className="text-gray-800 hover:text-blue-500">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="text-gray-800 hover:text-blue-500">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navar;
