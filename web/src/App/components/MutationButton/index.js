import React from 'react'
import withModal from 'orionsoft-parts/lib/decorators/withModal'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Button from 'orionsoft-parts/lib/components/Button'
import autobind from 'autobind-decorator'
import WithParams from 'orionjs-react-autoform/lib/WithParams'
import WithMutation from 'orionjs-react-autoform/lib/WithMutation'
import getFragment from 'orionjs-react-autoform/lib/getFragment'
import isEqual from 'lodash/isEqual'

@withModal
export default class FormModal extends React.Component {
  static propTypes = {
    showModal: PropTypes.func,
    updateModal: PropTypes.func,
    label: PropTypes.node,
    message: PropTypes.node,
    title: PropTypes.node,
    confirmText: PropTypes.node,
    mutation: PropTypes.string,
    params: PropTypes.object,
    only: PropTypes.any,
    omit: PropTypes.any,
    onSuccess: PropTypes.func,
    primary: PropTypes.bool,
    danger: PropTypes.bool,
    fragment: PropTypes.any,
    disabled: PropTypes.bool,
    renderChildren: PropTypes.func,
    children: PropTypes.node
  }

  static defaultProps = {
    onSuccess: () => {},
    primary: false,
    danger: false
  }

  state = {}

  @autobind
  async submit() {
    try {
      this.errorMessage = null
      const result = await this.mutate(this.props.params)
      this.props.onSuccess(result)
    } catch (error) {
      if (error.graphQLErrors) {
        const message = error.graphQLErrors.map(err => err.message).join('. ')
        this.errorMessage = message
      } else {
        this.errorMessage = error.message
      }
      return false
    }
  }

  @autobind
  async open(mutate) {
    this.mutate = mutate
    const {renderChildren, children} = this.props

    await this.props.showModal({
      title: this.props.title,
      confirm: this.submit,
      confirmText: this.props.confirmText,
      children,
      render: renderChildren || this.renderContent,
      cancelText: 'Cancel'
    })
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      !isEqual(prevProps.children, this.props.children) ||
      !isEqual(prevProps.title, this.props.title) ||
      !isEqual(prevProps.message, this.props.message)
    ) {
      await this.props.updateModal({
        title: this.props.title,
        confirmText: this.props.confirmText,
        children: this.props.children
      })
    }
  }

  getFragment({name, result, basicResultQuery, params}) {
    if (this.props.fragment) {
      return this.props.fragment
    } else {
      return getFragment({name, result, basicResultQuery, params})
    }
  }

  @autobind
  renderContent() {
    if (this.props.children) return this.props.children
    return (
      <div>
        <div className={styles.message}>{this.props.message}</div>
        <div className={styles.error}>{this.errorMessage}</div>
      </div>
    )
  }

  renderButton() {
    return (
      <WithParams name={this.props.mutation} loading={'Loading...'}>
        {({name, result, basicResultQuery, params}) => (
          <WithMutation
            params={params}
            fragment={this.getFragment({name, result, basicResultQuery, params})}
            mutation={this.props.mutation}>
            {mutate => (
              <Button
                disabled={this.props.disabled}
                danger={this.props.danger}
                primary={this.props.primary}
                onClick={() => this.open(mutate)}>
                {this.props.label}
              </Button>
            )}
          </WithMutation>
        )}
      </WithParams>
    )
  }

  render() {
    return this.renderButton()
  }
}
