import * as React from 'react';

interface INavBarProps {
}

export function NavBar (props: INavBarProps) {
    return (
        <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
            <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
                <p className="flex items-center justify-center gap-2"></p>
            </div>Navbar

        </nav>
      
    );
}

