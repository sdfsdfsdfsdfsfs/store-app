import { useEffect } from 'react'

const useDocTitle = (title) => {
  useEffect(() => {
    document.title = (title) ? `${title} - The Rage Lab` : 'The Rage Lab';
  }, [title]);
}

export default useDocTitle;
