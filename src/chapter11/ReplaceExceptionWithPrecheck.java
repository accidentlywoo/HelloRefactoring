public ResourcePool{
    public Resource get(){
        Resource result;
        if(available.isEmpty()){
            result = Resource.create();
        }else{
            result = available.pop();
        }
        allocated.add(result);
        return result;
    }
    private Deque<Resource> available;
    private List<Resource> allocated;
}