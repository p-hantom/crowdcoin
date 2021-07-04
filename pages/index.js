import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react'
import Layout from '../components/Layout'
import { Link } from '../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    // for server-side rendering
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log('getInitial',campaigns)
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />
  }

  render() {
    console.log(this.props.campaigns)
    return (
      <Layout>
        <div>
          <Link route="/campaigns/new">
            <a>
              <Button content='Create Campaign' icon='add circle' primary floated="right" />
            </a>
          </Link>
          
          {this.renderCampaigns()}
          
        </div>
      </Layout>
    )
  }
}

export default CampaignIndex;