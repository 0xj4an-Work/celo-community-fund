// Incoming Celo Governance Proposals (CGPs)
// Source: https://github.com/celo-org/governance/tree/main/CGPs
// Mondo: https://mondo.celo.org/
// Last updated: 2026-10-30T04:42:20.168Z

export const incomingProposals = [
  {
    "id": "cgp-0257",
    "title": "Proposal Description",
    "status": "DRAFT",
    "proposer": "'Wesley Malipaard (@Westermali on the Celo Forum)'",
    "dateSubmitted": "2026-10-22",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "https://forum.celo.org/t/final-revenue-based-celo-burn-allocate-25-of-net-l2-sequencer-revenue-to-permanent-burn/13727 governance-proposal-id: date-executed: ---  # Proposal Description  This CGP asks Celo Governance to allocate 25% of future Net L2 Sequencer Revenue to a permanent CELO burn and the remaining 75% to the Celo Community Fund. It preserves the existing revenue calculation and cost de",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0257.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0256",
    "title": "[... 0x0357EE22…80C4, 0x857BF24e…4C16]   (adapters active, underlying absent)",
    "status": "PROPOSED",
    "proposer": "'Pavel Hornak (@pahor167)'",
    "dateSubmitted": "2026-10-01",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "https://forum.celo.org/t/fix-usa-and-xau-0-fee-distribution-in-feehandler/13828 governance-proposal-id: 313 date-executed: ---",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0256.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0255",
    "title": "0",
    "status": "PROPOSED",
    "proposer": "'Pavel Hornak (@pahor167)'",
    "dateSubmitted": "2026-10-01",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "https://forum.celo.org/t/set-the-governance-hotfix-execution-window-to-24-hours/13810 governance-proposal-id: 312 date-executed: ---",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0255.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0254",
    "title": "0x41822d8A191fcfB1cfcA5F7048818aCd8eE933d3",
    "status": "PROPOSED",
    "proposer": "'Pavel Hornak (@pahor167)'",
    "dateSubmitted": "2026-10-01",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "https://forum.celo.org/t/governance-approver-rotation-correction-re-add-eran-tromer-remove-kobi-gurkan/13798 governance-proposal-id: 314 date-executed: ---",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0254.md",
    "mondoUrl": null
  },
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
