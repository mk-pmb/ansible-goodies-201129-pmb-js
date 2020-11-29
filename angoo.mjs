// -*- coding: utf-8, tab-width: 2 -*-

import linuxUserBogusPwHash from 'ansible-bogus-linux-pwhash';

const angoo = {

  net: {
    hostNames: {
      shortHost: '{{ ansible_hostname | default(inventory_hostname_short) }}',
    },
  },


  osUser: {
    linuxUserBogusPwHash,
  },



};

export default angoo;
