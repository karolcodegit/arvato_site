import React from 'react'

const Title = ({tag: Tag, children, white}) => {
  const titleClass = white ? 'text-blue' : 'text-grayDark'; 
    switch(Tag){
      case 'h1': return <Tag className={`${titleClass} block font-sans  antialiased text-3xl max-lg:text-2xl max-md:text-xl font-semibold leading-snug tracking-normal mb-4`}>{children}</Tag>;
      case 'h2': return <Tag className={`${titleClass} block font-sans antialiased text-2xl max-lg:text-xl max-md:text-lg font-semibold leading-snug tracking-normal mb-4`}>{children}</Tag>;
      case 'h3': return <Tag className={`${titleClass} block font-sans antialiased text-xl max-md:text-2xl font-semibold leading-snug  tracking-normal mb-3`}>{children}</Tag>;
      case 'h4': return <Tag className={`${titleClass} block font-sans antialiased text-lg font-semibold leading-snug tracking-normal mb-3`}>{children}</Tag>;
      case 'h5': return <Tag className={`${titleClass} font-sans antialiased text-base font-semibold mb-2  leading-snug tracking-normal `}>{children}</Tag>;
      case 'h6': return <Tag className={`${titleClass} antialiased text-sm font-semibold`}>{children}</Tag>;
      default: return <Tag className={`${titleClass} text-xl font-semibold`}>{children}</Tag>;
  };
}
export default Title