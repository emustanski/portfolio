import { useCallback, useRef, useState } from 'react';
import Head from 'next/head';
import { useOnClickOutside } from 'usehooks-ts';
import { Transition } from '@enums';
import { JOB_TITLE, OWNER_NAME } from '@constants';
import Wrapper from '@components/Wrapper';
import Navigation from '@components/Navigation';
import Main from '@components/Main';
import Footer from '@components/Footer';
import Background from '@components/Background';

const Home = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const throttleInProgressRef = useRef(false);
  const [article, setArticle] = useState('');
  const [transition, setTransition] = useState<Transition>(
    Transition.NAV_VISIBLE
  );

  const handleOpenArticle = useCallback((key: string) => {
    if (throttleInProgressRef.current) return;
    throttleInProgressRef.current = true;

    setTransition(Transition.NAV_TRANSITION);
    setArticle(key);

    setTimeout(() => {
      setTransition(Transition.ARTICLE_TRANSITION);
    }, 325);

    setTimeout(() => {
      setTransition(Transition.ARTICLE_VISIBLE);
      throttleInProgressRef.current = false;
    }, 400);
  }, []);

  const handleCloseArticle = useCallback(() => {
    if (throttleInProgressRef.current) return;
    throttleInProgressRef.current = true;

    setTransition(Transition.ARTICLE_TRANSITION);

    setTimeout(() => {
      setTransition(Transition.NAV_TRANSITION);
    }, 325);

    setTimeout(() => {
      setTransition(Transition.NAV_VISIBLE);
      setArticle('');
      throttleInProgressRef.current = false;
    }, 400);
  }, []);

  const handleClickOutside = useCallback(() => {
    if (!!article) {
      handleCloseArticle();
    }
  }, [article, handleCloseArticle]);

  useOnClickOutside(wrapperRef, handleClickOutside);

  return (
    <>
      <Head>
        <title>{`${OWNER_NAME} | ${JOB_TITLE}`}</title>
      </Head>
      <Wrapper>
        <Navigation onOpenArticle={handleOpenArticle} transition={transition} />
        <Main
          ref={wrapperRef}
          article={article}
          onCloseArticle={handleCloseArticle}
          transition={transition}
        />
        <Footer transition={transition} />
      </Wrapper>
      <Background />
    </>
  );
};

export default Home;
