/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import theme from 'components/Theme/index';
import { Helmet } from 'react-helmet';
// Page notfound styled component
import Wrapper from 'components/PageNotFound/wrapperPage';
import TitlePage from 'components/PageNotFound/titlePage';
import SubTitlePage from 'components/PageNotFound/subTitlePage';
import ContentPage from 'components/PageNotFound/contentPage';
import BtnPage from 'components/PageNotFound/buttonPage';

export default function NotFound() {
  return (
    <Wrapper theme={theme}>
      <Helmet>
        <title>404 Page not found</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <TitlePage theme={theme}>Opps!</TitlePage>
      <SubTitlePage theme={theme}>404 - page not found</SubTitlePage>
      <ContentPage theme={theme}>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable
      </ContentPage>
      <BtnPage to="/" theme={theme}>
        Go to HomePage
      </BtnPage>
    </Wrapper>
  );
}
