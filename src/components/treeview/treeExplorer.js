import React, { Component } from 'react';
import styled from 'styled-components';
import Tree from './tree';

const StyledTreeExplorer = styled.div`
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
`;

const TreeWrapper = styled.div`
    width: 250px;
`;

export default class TreeExplorer extends Component {
    state = {
        selectedTree: null
    }

    onSelect = (tree) => this.setState({ selectedTree: tree });

    render() {
        const { selectedTree } = this.state;

        return (
            <StyledTreeExplorer>
                <TreeWrapper>
                    <Tree onSelect={this.onSelect} />
                </TreeWrapper>
                <div>
                    {selectedTree && selectedTree.type === 'file' && selectedTree.content}
                </div>
            </StyledTreeExplorer>
        )
    }
}
