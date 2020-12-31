import React from 'react';

const Link = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
    return (
        <a
            style={{
                padding: 30,
                margin: 5,
                background: '#eeeeee',
                display: 'block',
                textDecoration: 'none',
                fontWeight: 'bold',
            }}
            {...props}
        >
            {children}
        </a>
    );
};

const Menu = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            {...props}
        >
            {children}
        </div>
    );
};
export const Main = () => {
    return (
        <Menu>
            <Link href="/zeus/"> Zeus usage </Link>
            <Link href="/panel/">Generated admin</Link>
        </Menu>
    );
};
