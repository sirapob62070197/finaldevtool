<script>
export default {
  name: 'IndexPage',

  middleware ({ redirect }) {
    return redirect('/landing')
  }
}
</script>
