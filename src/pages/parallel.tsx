import { NextPageContext } from 'next';
import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { withTranslation, WithTranslation } from '../server/i18n';

import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';

import { fetchWeeklyClips } from '../store/stats/actions';
import { resetContribute, setGoal } from '../store/contribute/actions';

import { SimpleSentence } from '../types/sentences';

import makeSSRDispatch from '../utilities/ssr-request';

import ContributePage from '../components/contribute/setup/contribute';
import { ContributeType, Goal } from '../types/contribute';
import styled from 'styled-components';

const ParallelHeader = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem;
    z-index: 1;
`;

const dispatchProps = {
    resetContribute,
};

interface InitialProps {
    initialSentences: Array<SimpleSentence>;
}

type Props = ReturnType<typeof mapStateToProps> &
    InitialProps &
    typeof dispatchProps &
    WithTranslation &
    WithRouterProps;

interface State {
    demographic: boolean;
}

class ParallelPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            demographic: false,
        };
    }

    static async getInitialProps(ctx: NextPageContext) {
        const { isServer, req, store } = ctx;

        // Reset session progress
        store.dispatch(resetContribute());

        const goal: Goal = {
            contributeType: ContributeType.SPEAK,
            name: 'Parallel 50',
            text: '',
            count: 50,
        };
        // Set goal for Parallel
        store.dispatch(setGoal(goal));

        // Fetch some stats to display at the end of the session
        makeSSRDispatch(ctx, fetchWeeklyClips.request);

        return {
            namespacesRequired: ['common'],
        };
    }

    onDemographicsSubmit = () => {
        this.setState({ demographic: true });
    };

    render() {
        const { t } = this.props;
        return (
            <div>
                <ParallelHeader>
                    {t('parallel-collection-for-pronunciation-research')}
                </ParallelHeader>
                <ContributePage
                    sentencesSource="parallel"
                    contributeType={ContributeType.SPEAK}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    contribute: state.contribute,
    user: state.user,
});

export default connect(
    mapStateToProps,
    dispatchProps
)(withTranslation('common')(withRouter(ParallelPage)));
