import React, { useEffect, useState } from 'react';

function FallbackToDjango() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtml = async () => {
      const response = await fetch(window.location.pathname, {
        headers: { 'Accept': 'text/html' },
      });
      const html = await response.text();
      setHtmlContent(html);
    };

    fetchHtml();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default FallbackToDjango;