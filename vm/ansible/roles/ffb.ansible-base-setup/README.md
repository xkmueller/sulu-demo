# Ansible Role: Ansible Base Setup

Executes tasks that have to be executed on any system used.

## Installed Software
- If set, additional APT packages will be installed
- Locales for the system will be generated

## Requirements

None

## Role Variables

Available variables are listed below, along with default values (see `defaults/main.yml`):

*`additional_software`*:
Names of the APT packages to install at the beginning of the provisioning

*`required_locales`*: 
Which locales to install on the VM

## Dependencies

None.

## Example Playbook

    - hosts: db-servers
      become: yes
      vars_files:
        - vars/main.yml
      roles:
        - { role: ffb.ansible-base-setup }

*Inside `vars/main.yml`*:

            additional_software: { }
            required_locales:
              - en_US
              - en_US.UTF-8
              - de_DE
              - de_DE.UTF-8

## License

MIT / BSD

## Author Information

This role was created in 2018 by [four-for-business](https://www.4fb.de/).