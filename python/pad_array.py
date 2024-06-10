def pad(array, min_size, value = None):
    return array if value == 0 else padding(array, min_size, value)


def padding(array, min_zise, value):
    start_at = len(array)
    for i in range(start_at, min_zise):
        array.append(value)
    return array