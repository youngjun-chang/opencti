import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'ramda';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Gauge, ChessKnight, Fire, Diamond, Biohazard,
} from 'mdi-material-ui';
import inject18n from '../../../../components/i18n';

const styles = theme => ({
  drawer: {
    minHeight: '100vh',
    width: 260,
    position: 'fixed',
    overflow: 'auto',
    padding: 0,
    backgroundColor: theme.palette.background.navLight,
  },
  item: {
    padding: '0 0 0 15px',
  },
  toolbar: theme.mixins.toolbar,
});

class AttackPatternKnowledgeBar extends Component {
  render() {
    const {
      t, location, classes, attackPatternId,
    } = this.props;
    return (
      <Drawer
        variant="permanent"
        anchor="right"
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbar} />
        <MenuList component="nav">
          <MenuItem
            component={Link}
            to={`/dashboard/techniques/attack_patterns/${attackPatternId}/knowledge/overview`}
            selected={
              location.pathname
              === `/dashboard/techniques/attack_patterns/${attackPatternId}/knowledge/overview`
            }
            dense={false}
            classes={{ root: classes.item }}
          >

            <ListItemIcon>
              <Gauge />
            </ListItemIcon>
            <ListItemText primary={t('Overview')} secondary={t('Synthesis of knowledge')} />
          </MenuItem>
          <MenuItem
            component={Link}
            to={`/dashboard/techniques/attack_patterns/${attackPatternId}/knowledge/intrusion_sets`}
            selected={
              location.pathname
              === `/dashboard/techniques/attack_patterns/${attackPatternId}/knowledge/intrusion_sets`
            }
            dense={false}
            classes={{ root: classes.item }}
          >
            <ListItemIcon>
              <Diamond />
            </ListItemIcon>
            <ListItemText
              primary={t('Intrusion sets')}
              secondary={t('Using this TTP')}
            />
          </MenuItem>
          <MenuItem
            component={Link}
            to={`/dashboard/techniques/attack_patterns/${attackPatternId}/knowledge/campaigns`}
            selected={
              location.pathname
              === `/dashboard/techniques/attack_patterns/${attackPatternId}/knowledge/campaigns`
            }
            dense={false}
            classes={{ root: classes.item }}
          >
            <ListItemIcon>
              <ChessKnight />
            </ListItemIcon>
            <ListItemText
              primary={t('Campaigns')}
              secondary={t('Using this TTP')}
            />
          </MenuItem>
          <MenuItem
            component={Link}
            to={`/dashboard/techniques/attack_patterns/${attackPatternId}/knowledge/incidents`}
            selected={
              location.pathname
              === `/dashboard/techniques/attack_patterns/${attackPatternId}/knowledge/incidents`
            }
            dense={false}
            classes={{ root: classes.item }}
          >
            <ListItemIcon>
              <Fire />
            </ListItemIcon>
            <ListItemText
              primary={t('Incidents')}
              secondary={t('Using this TTP')}
            />
          </MenuItem>
          <MenuItem
            component={Link}
            to={`/dashboard/techniques/attack_patterns/${attackPatternId}/knowledge/malwares`}
            selected={
              location.pathname
              === `/dashboard/techniques/attack_patterns/${attackPatternId}/knowledge/malwares`
            }
            dense={false}
            classes={{ root: classes.item }}
          >
            <ListItemIcon>
              <Biohazard />
            </ListItemIcon>
            <ListItemText
              primary={t('Malwares')}
              secondary={t('Using this TTP')}
            />
          </MenuItem>
        </MenuList>
      </Drawer>
    );
  }
}

AttackPatternKnowledgeBar.propTypes = {
  attackPatternId: PropTypes.string,
  classes: PropTypes.object,
  location: PropTypes.object,
  t: PropTypes.func,
};

export default compose(
  inject18n,
  withRouter,
  withStyles(styles),
)(AttackPatternKnowledgeBar);
