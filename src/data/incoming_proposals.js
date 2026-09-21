// Incoming Celo Governance Proposals (CGPs)
// Source: https://github.com/celo-org/governance/tree/main/CGPs
// Mondo: https://mondo.celo.org/
// Last updated: 2026-09-21T03:42:34.034Z

export const incomingProposals = [
  {
    "id": "cgp-0253",
    "title": "",
    "status": "PROPOSED",
    "proposer": "\"@mentoLabs\"",
    "dateSubmitted": "2026-08-24",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "https://forum.celo.org/t/mgp-19-bringing-mento-stable-asset-issuance-home-to-celo-governance/13750 governance-proposal-id: 310 date-executed: ---",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0253.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0252",
    "title": "",
    "status": "DRAFT",
    "proposer": "\"@mentoLabs\"",
    "dateSubmitted": "2026-08-18",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "https://forum.mento.org/t/mgp-18-mento-v2-deprecation/137 governance-proposal-id: 308 date-executed: ---",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0252.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0251",
    "title": "",
    "status": "PROPOSED",
    "proposer": "'Celo Communities Guild (@0xGoldo, @0xj4an-work, @Anthony, @skdt)'",
    "dateSubmitted": "2026-08-10",
    "fundingRequested": {
      "amount": 551000,
      "token": "CELO",
      "usdEquivalent": null
    },
    "summary": "https://forum.celo.org/t/celo-communities-guild-season-3-funding-request/13648 governance-proposal-id: 311 date-executed: ---  Proposal Description ============================",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0251.md",
    "mondoUrl": null
  }
];

// Helper function to format date
export const formatProposalDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

// Helper function to get status color
export const getStatusColor = (status) => {
  switch (status.toUpperCase()) {
    case 'DRAFT':
      return '#FFB74D'; // Orange
    case 'PROPOSED':
      return '#64B5F6'; // Blue
    case 'VOTING':
      return '#9575CD'; // Purple
    case 'APPROVED':
      return '#56DF7C'; // Green
    case 'REJECTED':
      return '#E57373'; // Red
    case 'EXECUTED':
      return '#FCFF52'; // Yellow
    default:
      return '#ccc'; // Gray
  }
};
